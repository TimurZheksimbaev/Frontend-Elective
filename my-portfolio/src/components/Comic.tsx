import { useEffect, useState } from "react"
import ComicAPI from "../api/ComicAPI.ts"
import ComicData from "../api/ComicModel.ts";
import "../styles/Comic.css"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const email: string = 't.zheksimbaev@innopolis.university';

function Comic() {

    const [comicData, setComicData] = useState<ComicData | null>(null);
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const fetchComicData = async () => {
            const comic = new ComicAPI();
            const data = await comic.getComicData(email);
            setComicData(data);

            // Assuming ComicData has properties like year, month, and day
            if (data.year && data.month && data.day) {
                dayjs.extend(relativeTime);
                const date = new Date(data.year, data.month - 1, data.day);
                setDate(dayjs(date).toDate().toLocaleDateString());
            }
        };

        fetchComicData();
    }, []);



    return (
        <div className="main-div">
            
            <div className="comic-container">
                <h2>{comicData ? comicData.safe_title : "Loading..."}</h2>
                <p>{comicData ? date: "Loading..."}</p>
                <img src={comicData?.img} alt={comicData?.alt} />
            </div>
        </div>

    )
}


export default Comic