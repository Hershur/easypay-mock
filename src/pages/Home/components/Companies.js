import assets from "../../../assets";

const Companies = ()=> {
    return (
        <div className="flex items-center justify-center flex-col m-5">
            <h2 className="uppercase text-[#A1ABBA] text-2xl">
                They trust easypay
            </h2>

            <div className="flex items-center justify-center w-3/4" >
                <img className="transform scale-[0.6]"  src={assets.FrontLogo} alt="Front Logo" />
                <img className="transform scale-[0.6]" src={assets.Lattice} alt="Front Logo" />
                <img className="transform scale-[0.6]" src={assets.ProductBoard} alt="Front Logo" />
                <img className="transform scale-[0.6]" src={assets.TripleByte} alt="Front Logo" />
            </div>
        </div>
    );
};

export default Companies;