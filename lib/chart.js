import fs from 'fs'
import path from 'path'


export async function getChartData(){
    const fullPath = path.join(process.cwd(), "data/data.json")

    const content = fs.readFileSync(fullPath, 'utf8')
    
    const contentData = JSON.parse(content)
    console.log(contentData)
    return contentData;
}


