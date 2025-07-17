import Ig from '../../assets/imgs/page/homepage1/instagram6.png'
import IgOne from '../../assets/imgs/page/homepage1/instagram.png'
import IgThree from '../../assets/imgs/page/homepage1/instagram3.png'
import IgFour from '../../assets/imgs/page/homepage1/instagram4.png'
import IgTwo from '../../assets/imgs/page/homepage1/instagram2.png'
import IgFive from '../../assets/imgs/page/homepage1/instagram5.png'
const RecentlyViewProduct: React.FC = () => {
    return (
        <>
       <section className="section block-section-10">
                <div className="container">
                    <div className="top-head justify-content-center">
                        <h4 className="text-uppercase brand-1 wow fadeInDown">instagram feed</h4>
                    </div>
                </div>
                <div className="box-gallery-instagram">
                    <div className="box-gallery-instagram-inner">
                        <div className="gallery-item wow fadeInLeft"><img src={Ig} alt="kidify" /></div>
                        <div className="gallery-item wow fadeInUp"><img src={IgTwo} alt="kidify" /></div>
                        <div className="gallery-item wow fadeInUp"><img src={IgThree} alt="kidify" /></div>
                        <div className="gallery-item wow fadeInUp"><img src={IgFour} alt="kidify" /></div>
                        <div className="gallery-item wow fadeInRight"><img src={IgFive} alt="kidify" /></div>
                        <div className="gallery-item wow fadeInRight"><img src={IgOne} alt="kidify" /></div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default RecentlyViewProduct;