import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ComicData from './ComicModel';



const email: string = 't.zheksimbaev@innopolis.university';
const baseUrl: URL = new URL('https://fwd.innopolis.university/api/');


interface ComicAPIInterface {
    getComicId(email: string): Promise<string>
    getComicData(email: string): Promise<ComicData>
}

class ComicAPI implements ComicAPIInterface {

    async getComicId(email: string): Promise<string> {
        // add params
        const idUrl: URL = new URL('hw2', baseUrl);
        if (email) {
            idUrl.searchParams.append('email', email);
        } else {
            console.error("No email or invalid email")
        }
        
        // fetch comic id
        try {
            const response: Response = await fetch(idUrl);
            const id: string = await response.json()
            // cache id for fast retrieve in future
            localStorage.setItem("comicId", id)
            return id
        } catch (error) {
            console.error('Error fetching comic ID:', error);
            throw error;
        }
    }

    async getComicData(email: string): Promise<ComicData> {
        const comicId: string = await this.getComicId(email)
        const comicUrl: URL = new URL('comic', baseUrl)
        // add params
        if (comicId) {
            comicUrl.searchParams.append('id', comicId);
        } else {
            console.error('No id', Error)
        }
        
        // fetch comic data
        try {
            const response: Response = await fetch(comicUrl);
            return response.json();
        } catch (error) {
            console.error('Error fetching comic details:', error);
            throw error;
        }
    }
}

export default ComicAPI