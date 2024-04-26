import mongoose from 'mongoose';
import categoriesFixture from './assets/fixtures/category';
import subCategoriesFixture from './assets/fixtures/subCategory';
import productsFixture from './assets/fixtures/product';
import { Product, Category, SubCategory } from '@e-shop/database/models';
import { SubCategory as TSubCategory } from '@e-shop/types';

/**
 * @todo Refactor this function
 */
export async function seedData() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);

    const categoriesWithoutId = categoriesFixture.map((category) => {
      return { name: category.name };
    });

    /**
     * Main Categories
     */
    const resultCategories = await Category.insertMany(categoriesWithoutId);
    console.info('Categories seeded!');

    /**
     * SubCategories
     */
    const subCategoriesWithParent = subCategoriesFixture.map((subCategory) => {
      const parentCategoryIndex = categoriesFixture.findIndex(
        (category) => subCategory.category === category._id
      );

      const parentCategoryObjectId = resultCategories[parentCategoryIndex]._id;

      return {
        name: subCategory.name,
        category: parentCategoryObjectId,
      } as Omit<TSubCategory, '_id'>;
    });

    const subCategoriesDatabase = await SubCategory.insertMany(
      subCategoriesWithParent
    );
    console.info('SubCategories seeded!');

    /**
     * Products
     */
    const productWithCategory = productsFixture.map((productFixture) => {
      const parentCategoryIndex = subCategoriesFixture.findIndex(
        (subCategory) => productFixture.subCategory === subCategory._id
      );

      const subCategoryObjectId =
        subCategoriesDatabase[parentCategoryIndex]._id;

      const { _id, subCategory, ...product } = productFixture;

      return {
        ...product,
        subCategory: subCategoryObjectId,
      };
    });

    await Product.insertMany(productWithCategory);
    console.info('Product seeded!');

    console.log('All data seeded!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
}

seedData();

async function destroyData() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    const categories = Category.deleteMany();
    const products = Product.deleteMany();
    const subCategories = SubCategory.deleteMany();

    await Promise.all([categories, products, subCategories]);

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
}
