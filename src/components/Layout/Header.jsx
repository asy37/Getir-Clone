import { BiGlobe }from 'react-icons/bi';
import { RiUserFill, RiUserAddFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
        <div className='bg-brand'>
            <div className='container md:h-11 h-16  mx-auto flex justify-center md:justify-between items-center '>
                <Link to={"/"}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="53" height="24" viewBox="0 0 53 24" fill="none">
                    <path d="M26.0384 9.24019C26.0384 6.49999 23.8012 4.71289 20.5182 4.71289C17.4074 4.71289 14.1509 6.95007 14.1509 11.9275C14.1509 15.7267 16.4542 18.5331 20.4256 18.5331C22.6627 18.5331 25.125 17.2623 25.7471 16.3886C25.7471 16.3886 25.3235 14.7471 24.1586 14.7471C23.5497 14.7471 23.0996 14.9854 22.5965 15.1839C22.0803 15.3957 21.4581 15.5943 20.6638 15.5943C19.5519 15.5943 17.6456 15.1575 17.6456 12.7614C17.6456 12.7614 18.5458 13.0262 20.5844 13.0262C24.9793 13.0394 26.0384 11.1861 26.0384 9.24019ZM20.6506 7.67814C22.1597 7.67814 22.8878 8.49888 22.8878 9.25343C22.8878 10.1404 22.0935 10.7096 20.6506 10.7096C18.5458 10.7096 17.7515 10.4184 17.7515 10.4051C17.7383 9.14753 18.7444 7.67814 20.6506 7.67814Z" fill="#FFD300"/>
                    <path d="M34.206 15.6206C32.6969 15.6206 31.9159 14.3498 31.7703 13.7938C31.6246 13.2511 31.532 12.47 31.532 11.6625L31.5585 7.55885H32.6572C33.5441 7.55885 34.2192 7.2941 34.709 6.77783C35.1856 6.26155 35.4371 5.55995 35.4371 4.6995H31.5717L31.5452 2.88593C31.5452 2.30347 31.5452 1.84015 31.5585 1.48273C31.5717 1.12532 31.5849 0.847325 31.5982 0.635521C31.6114 0.41048 31.6379 0.225151 31.6511 0.0927734C30.473 0.0927734 29.586 0.344292 28.9639 0.847326C28.3417 1.35036 28.0372 2.1711 28.0372 3.33602L28.0107 12.4171C28.0107 16.1369 29.7846 18.5594 33.1735 18.5594C34.8414 18.5594 36.0593 17.6592 36.0593 16.2958C36.0593 15.8192 35.9931 15.5677 35.9534 15.4088C35.6489 15.4883 35.1062 15.6206 34.206 15.6206Z" fill="#FFD300"/>
                    <path d="M42.6917 15.7922C41.9372 15.7922 41.4606 15.2494 41.4606 14.3493V7.79658C41.4606 7.21412 41.4606 6.7508 41.4738 6.39338C41.4871 6.03596 41.5003 5.75797 41.5136 5.54617C41.5268 5.32112 41.5533 5.1358 41.5665 5.00342C40.3751 5.00342 39.4749 5.25493 38.8528 5.75797C38.2306 6.261 37.9261 7.08174 37.9261 8.24666L37.8997 14.9185C37.8997 17.3013 39.4352 18.625 41.3679 18.5456C42.5858 18.4927 43.6448 17.9234 43.6448 16.6394C43.6448 16.1099 43.5522 15.673 43.5522 15.673C43.2874 15.7392 43.0888 15.7922 42.6917 15.7922Z" fill="#FFD300"/>
                    <path d="M51.3625 5.03027C50.6344 5.03027 49.8931 5.1097 49.1518 5.28179C48.4105 5.44065 47.7353 5.75835 47.1396 6.22167C46.5439 6.68499 46.0541 7.3204 45.6835 8.14114C45.3128 8.96188 45.1143 10.0077 45.1143 11.305V15.0512C45.1143 16.2029 45.2599 17.2752 45.9615 17.8047C46.716 18.3871 47.603 18.4136 48.7811 18.4136C48.7679 18.2945 48.7414 17.9635 48.7282 17.7385C48.7149 17.5267 48.6884 17.2487 48.6884 16.8913C48.6752 16.5339 48.6752 16.0705 48.6752 15.4881V10.6828C48.6752 9.54434 48.8605 8.08819 50.8594 7.9161C51.9846 7.82344 52.9775 7.38659 52.9775 6.16872C52.9775 5.89073 52.9113 5.34798 52.7657 5.03027H51.3625Z" fill="#FFD300"/>
                    <path d="M6.24821 4.71289C2.14451 4.71289 0 7.58548 0 11.0802C0 14.3102 1.97242 17.3417 5.55985 17.3417C7.41313 17.3417 8.49862 16.5474 8.76338 16.3224V17.9374C8.76338 19.7907 8.0353 21.035 6.16878 21.035C5.26862 21.035 4.59349 20.7835 3.98456 20.4923C3.42857 20.2275 3.0182 19.923 2.47546 19.923C1.08549 19.923 0.7016 21.6439 0.7016 21.6572C1.74738 23.0074 4.14341 24.0003 6.15554 24.0003C10.1136 24.0003 12.2978 21.6969 12.2978 17.1166C12.2978 17.1166 12.2978 12.5099 12.2978 11.7554C12.2846 7.57224 10.4313 4.71289 6.24821 4.71289ZM6.23497 14.2308C4.69939 14.2308 3.52124 13.2645 3.52124 11.1332C3.52124 8.8563 4.72587 7.67814 6.23497 7.67814C7.7176 7.67814 8.80309 8.57831 8.80309 10.9611C8.80309 13.3968 7.62493 14.2308 6.23497 14.2308Z" fill="#FFD300"/>
                    <path d="M38.7997 3.69333C39.0777 3.82571 39.3689 3.90513 39.6866 3.90513C40.4147 3.90513 40.9839 3.56095 41.4075 2.87259C41.5796 2.55488 41.6723 2.22394 41.6723 1.86652C41.6723 1.53558 41.5929 1.21787 41.434 0.913406C41.2751 0.622176 41.0369 0.397134 40.7192 0.238282C40.4412 0.0794288 40.1632 0 39.8587 0C39.5278 0 39.1968 0.0926649 38.8791 0.277993C38.5614 0.463321 38.3231 0.728075 38.1378 1.05902C37.9657 1.35025 37.873 1.69443 37.873 2.06509C37.873 2.39603 37.9525 2.71374 38.1113 2.99173C38.2702 3.28296 38.5085 3.52124 38.7997 3.69333Z" fill="#FFD300"/>
                    </svg>
                </Link>
                <nav className="hidden  md:flex gap-x-8 text-sm font-semibold ">
                    <div className="text-text flex items-center gap-x-2">
                        <BiGlobe size={20} />
                        Türkçe (TR)
                    </div>
                    <div className="text-text flex items-center" >
                        <RiUserFill size={20} />
                        Giriş Yap</div>
                    <div className="text-text flex items-center">
                        <RiUserAddFill size={20} />
                        Kayıt Ol
                    </div>
                </nav>
           </div>
        </div>
        <div className='md:hidden container mx-auto border-b border-brandyellow py-2 px-2 '>
            <div className='flex items-center justify-between' >
                <span className='flex items-center text-textfooter text-sm font-semibold'>
                    <MdLocationPin className='text-brand' size={20} />
                    Teslimat Adresi Belirle
                    </span>
                    <span>
                        <AiOutlineRight className='text-brand' size={20} />
                    </span>
            </div>
            
        </div>
    </>    
    )
}

