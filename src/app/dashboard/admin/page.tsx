import CountChart from "@/components/CountChart";
import Usercard from "@/components/Usercard";

const AdminPage = () => {
    return (
        < div className="p-4 flex gap-4 flex-col md:flex-row">
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className=" flex gap-4 justify-between flex-wrap">
                    <Usercard type="Students" />
                    <Usercard type="Teachers" />
                    <Usercard type="Parents" />
                    <Usercard type="Staff" />
                </div >
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    <div className="w-full lg:w-2/3 h-[450px]">
                    </div>
                </div>
                <div className=""></div>
            </div >
            <div className="w-full lg:w-2/3">l</div>
        </div >
    )
}

export default AdminPage;