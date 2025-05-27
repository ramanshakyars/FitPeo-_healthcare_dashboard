import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


export default function HealthOfBody() {
    return (
        <>
            <div className="h-full bg-blue-100">
                <div className="grid grid-cols-12 gap-2 m-4">
                    <div className='col-span-11'>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="search..." />
                    </div>
                    <div className='col-span-1'>
                        <NotificationsActiveIcon />
                    </div>

                </div>
                <div className="grid grid-cols-12 gap-2 m-2">
                    <div className='col-span-8 text-start'>
                        <h1>Dashboard</h1>
                    </div>
                    <form class="max-w-sm mx-auto col-span-4">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>
                </div>
                <div className="grid grid-cols-12 gap-2 m-2">
                    <div className="col-span-7 text-left h-64 bg-black">
                        Full Body Card
                    </div>
                    <div className="col-span-5 text-right h-64 bg-black">
                        <div className='h-16 bg-red-300 '>
                            teeth
                        </div>
                        <div className='h-16 bg-red-300 '>
                            heart
                        </div>
                        <div className='h-16 bg-red-300 '>
                            Lungs
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-64 bg-black">
                <h1>Health Of Body</h1>
            </div>

        </>
    )
} 