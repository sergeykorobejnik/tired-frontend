
import axios from "axios";
import * as cheerio from "cheerio"


const parseDDjinni = async (keywords, expLevel, callback) =>  {
    const template = `https://djinni.co/jobs/?exp_level=${expLevel}y&keywords=${keywords.join('+')}`


    try {
        const response = await axios.get(parseDDjinni(['React', 'junior'], 1))
        const data = await response.data
        const parsed = cheerio.load(data)
    } catch (e) {
        console.log(e);
    }
};

const setData = (result, payload) => result = [...payload]


async function parser ({srcState, keywords, expLevel}) {
    const {isDjinni, isDou, isWorkua} = srcState
    const dataArr = []
    if (isDjinni) {
        parseDDjinni(keywords, expLevel, setData.bind(null, dataArr))
    }



}



export {parser}