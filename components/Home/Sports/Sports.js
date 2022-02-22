import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';


const Sports = ({ sports }) => {
    const router = useRouter()
    const sportsData = sports.reverse()
    const singleData = sportsData.slice(0, 1);
    const multiData = sportsData.slice(1, 4);
    return (
        <div className="container">
            <h2 className="text-xl font-medium mt-5 mb-2">
                <span className="text-blue-900">
                    <Link href="/international">Sports</Link>{" "}
                </span>
                <ChevronRightIcon className="text-red-500" />
            </h2>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 mb-3 lg:mb-0">
                    <div className="p-3 rounded-md border-r border-b">
                        {singleData.map((single) => (
                            <div
                                onClick={() => router.push(`/${single.category}/${single.subCategory}/${single?._id}`)}
                                key={single?._id}
                                className="cursor-pointer imageEffect"
                            >
                                <div className="overflow-hidden rounded-md">
                                    <img src={single?.images?.img1} alt="" className="rounded-md" />
                                </div>
                                <div>
                                    <h2 className="text-xl mt-2 font-bold hover:text-red-500 duration-300 transitions-colors">{single?.heading}</h2>
                                    <p className="my-2 text-md">{single?.description[0].slice(0, 100)}</p>
                                    <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit">{`${formatDistanceToNow(new Date(single.publishedDate))} ago`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <div className="">
                        {multiData.map((multi) => (
                            <div key={multi?._id} onClick={() => router.push(`/${multi.category}/${multi.subCategory}/${multi?._id}`)} className="col-span-12 lg:col-span-4 mb-2 cursor-pointer p-2.5 border-l border-b rounded-md imageEffect">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-8">
                                        <h2 className="text-lg font-semibold leading-6 hover:text-red-500 duration-300 transitions-colors">
                                            {multi?.heading}
                                        </h2>
                                        <p className="text-sm my-1">{multi?.description[0]?.slice(0, 100)}</p>
                                        <p className="px-2 mt-2 py-1 font-medium text-sm rounded-full bg-gray-100 w-fit">{`${formatDistanceToNow(new Date(multi.publishedDate))} ago`}</p>
                                    </div>
                                    <div className="col-span-4 overflow-hidden rounded-md">
                                        <img className="w-full h-full object-cover rounded-md" src={multi?.images?.img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;