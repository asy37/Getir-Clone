export default function MobilApp() {
    return (
        <div className="bg-bgcolor md:py-2 shadow-inner mt-6">
            <div className={`min-h-[312px] container mx-auto  flex items-center relative justify-between overflow-hidden md:rounded-lg bg-brand bg-[url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')]`} >
                    <div className="absolute pl-5 py-6 md:py-0 md:pl-12 flex-shrink-0">
                        <h2 className="font-bold text-2xl leading-9 text-white">
                            Getir'i indirin!
                        </h2>
                        <span className="mt-3 font-semibold text-white">
                            İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
                        </span>
                        <ol className="flex flex-col md:flex-row pt-8">
                        <li className="p-0.5 mr-2">
                            <div>
                            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="getir"/>
                            </div>
                        </li>
                        <li className="p-0.5 mr-2">
                            <div>
                            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="getir"/>
                            </div>
                        </li>
                        <li className="p-0.5 mr-2">
                            <div>
                            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="getir"/>
                            </div>
                        </li>
                        </ol>
                </div>
                <div className="hidden xl:block absolute bottom-0 right-0">
                     <img  src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="getir"/>                    
                </div>
            </div>
        </div>
    )
}