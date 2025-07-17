import { useState } from "react";
import ProductList from "../../Component/ProductComponent/ProductList";

interface Filters {
    category: string | null;    
    size: string | null;
    color: string | null;
    priceRange: [number, number] | null;
    brands: string[];
}
const Product: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({
        category: null,
        size: null,
        color: null,
        priceRange: null,
        brands: []
    });

    return (
        <>
            <Banner />
            <section className="section content-products">
                <div className="container">
                    <div className="row">
                        <AsideFilter setFilters={setFilters} />
                        <ProductList filters={filters} />
                    </div>
                </div>
                <ProductRelated />
            </section>
        </>
    );
}