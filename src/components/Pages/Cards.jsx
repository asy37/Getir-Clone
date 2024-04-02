export default function Cards() {
    return (
        <div className="bg-bgcolor py-4 ">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 flex items-center gap-x-4  container mx-auto">
                <div className="h-full  flex flex-col items-center justify-start pt-12 px-8 pb-10 rounded-lg border bg-white shadow-sm" alt="cards">
                    <img src="	https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="cards"/>
                    <span className="text-xl font-semibold text-brand mt-6 text-center">Her siparişinize bir kampanya</span>
                    <span className="text-sm font-semibold text-graay text-center">Getir’de vereceğiniz her siparişe uygun bir <br /> kampanya bulabilirsiniz.</span>
                </div>
                <div className="h-full  flex flex-col items-center justify-center pt-14 px-8 pb-12 rounded-lg border bg-white shadow-sm ">
                    <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="cards" />
                    <span className="text-xl font-semibold text-brand mt-6 text-center">Dakikalar içinde kapınızda</span>
                    <span className="text-sm font-semibold text-graay text-center">Getir’le siparişiniz dakikalar içinde kapınıza gelir..</span>
                </div>
                <div className="h-full  flex flex-col items-center justify-end pt-12 px-8 pb-10 rounded-lg border bg-white shadow-sm">
                    <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="cards"/>
                    <span className="text-xl font-semibold text-brand mt-6 text-center">Binlerce çeşit mutluluk</span>
                    <span className="text-sm font-semibold text-graay text-center">Getir’de binlerce çeşit arasından seçiminizi <br /> yapabilirsiniz.</span>
                </div>
            </div>
        </div>
    )
}