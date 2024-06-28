import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


type ComicData = {
    month?: number,
    num?: number,
    link?: string,
    year?: number,
    news?: string,
    safe_title?: string,
    transcript?: string,
    alt?: string,
    img?: string,
    title?: string,
    day?: number
}

const email: string = 't.zheksimbaev@innopolis.university';
const baseUrl: URL = new URL('https://fwd.innopolis.university/api/');


interface ComicAPIInterface {
    getComicId(email: string): Promise<string>
    getComicData(email: string): Promise<ComicData>
    displayComic(comic: ComicData): void
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
    async displayComic(comic: ComicData) {
        const container: HTMLElement | null = document.getElementById('comic-container');
        if (!container) {
            console.error("No such container")
            return 
        }
        
        // safe title
        const title: HTMLHeadingElement | null = document.createElement('h2');
        if (!comic.safe_title) {
            console.error("No title")
            return 
        }
        title.textContent = comic.safe_title;
        
        // date
        if (!comic.month || !comic.year) {
            console.error("Invalid date")
            return 
        }
        dayjs.extend(relativeTime);
        const date: Date = new Date(comic.year, comic.month-1, comic.day);
        const timeAgo = dayjs(date).fromNow();
        const dateElement: HTMLParagraphElement | null = document.createElement('p');
        dateElement.textContent = date.toLocaleDateString();

        // image
        const img: HTMLImageElement | null = document.createElement('img');
        if (!comic.img || !comic.alt) {
            console.error("No image source or alt")
            return 
        }
        img.src = comic.img;
        img.alt = comic.alt;

        // adding everything to container
        container.appendChild(title);
        container.appendChild(dateElement);
        container.appendChild(img);
    }
}

async function main() {
    try {
        let comic = new ComicAPI()
        const comicData = await comic.getComicData(email);
        comic.displayComic(comicData);
    } catch (error) {
        console.error('Error processing comic:', error);
    }
}

main();
