import { memo,} from "react";
import Carousel from "react-multi-carousel";
import "./style.scss";
import "react-multi-carousel/lib/styles.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.jpg";
import cat5Img from "assets/users/images/categories/cat-5.jpg";
import cat6Img from "assets/users/images/categories/cat-6.jpg";
import cat7Img from "assets/users/images/categories/cat-7.jpg";

import { ProductCard } from "component";
import useBooks from "hooks/useBooks";

export const HomePage = () => {
    const { books } = useBooks();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const sliderItems = [
        { bgImg: cat1Img },
        { bgImg: cat2Img },
        { bgImg: cat3Img },
        { bgImg: cat4Img },
        { bgImg: cat5Img },
        { bgImg: cat6Img },
        { bgImg: cat7Img },
    ];

    const renderBooksTabs = (books) => {
        const categories = books.reduce((acc, book) => {
            acc[book.category] = acc[book.category] || [];
            acc[book.category].push(book);
            return acc;
        }, {});

        return (
            <Tabs>
                <TabList>
                    {Object.keys(categories).map((category, index) => (
                        <Tab key={index}>{category}</Tab>
                    ))}
                </TabList>
                {Object.keys(categories).map((category, index) => (
                    <TabPanel key={index}>
                        <div className="row">
                            {categories[category].map((book) => (
                                <div className="col-lg-3" key={book.id}>
                                    <ProductCard id={book.id} name={book.name} img={book.img} price={book.price} />
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        );
    };

    return (
        <>
            {/* Categorie Begin */}
            <div className="container container_categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    {sliderItems.map((item, key) => (
                        <div
                            className="categories_slider_item"
                            style={{ backgroundImage: `url(${item.bgImg})` }}
                            key={key}
                        ></div>
                    ))}
                </Carousel>
            </div>
            {/* Categorie End */}
            {/* Featured Begin */}
            <div className="container">
                <div className="featured">
                    <div className="selection-title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderBooksTabs(books)}
                </div>
            </div>
            {/* Featured End */}
        </>
    );
};

export default memo(HomePage);
