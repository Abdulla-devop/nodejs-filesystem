//imported fs file to read and write file
import fs from 'fs'
import path from 'path'
// to create a text file.varible file control the folder asset
const file = 'src/asset'
//using async to read and write file inside the asset folder
const readWriteFile = async(req,res)=>{
  try {
   let dateTime = new Date().toISOString().replace(new RegExp(':','g'),'_')
   console.log(dateTime)
    fs.writeFileSync(`${file}/${dateTime}.txt`,dateTime,'utf-8')

    let content = fs.readFileSync(`${file}/${dateTime}.txt`,'utf-8')

    res.status(200).send({
        message:"Success",
        content
    })
  } catch (error) {
    console.log(error) 
    res.status(500).send({
        error
    })
  }

}
export default {
    readWriteFile
}
