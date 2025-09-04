import Note from "../models/Notes.js"


export async function getNotes(req,res){
    try {
        const note = await Note.find().sort({createdAt:-1}) //newest first 
        res.status(200).json(note)

    } catch (error) {
        console.error('err occured',error)
        res.status(500).json({msg:"err fetching Data"})        
    }
}

export async function getNotesById(req,res){
    try {
        const note = await Note.findById(req.params.id)
        if(!note)
        {
            return res.status(404).json({msg:"obj not found"})
        }
        res.status(200).json(note)

    } catch (error) {
        console.error('err occured',error)
        res.status(500).json({msg:"err fetching Data"})        
    }
}


export async function postNotes(req,res){
    try {
        
        const {title,content} = req.body
        const newNote = new Note({title:title, content:content})
        
        await newNote.save()
        res.status(201).json({msg:"added successfully"})
        
    } catch (error) {
        
        console.error('err occured',error)
        res.status(500).json({msg:"err adding Data"})        
        
    }
}

export async function putNotes(req,res){
    try {
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title:title,content:content})
        if(!updatedNote)
        {
            return res.status(404).json({msg:"obj not found"})
        }
        res.status(200).json({msg:"updated successfully"})
        
    } catch (error) {
        
        console.error('err occured',error)
        res.status(500).json({msg:"err updating Data"}) 
        
    }
}


export async function delNotes(req,res){
    try {
        const delNote = await Note.findByIdAndDelete(req.params.id)
        if(!delNote)
        {
            return res.status(404).json({msg:"obj not found"})
        }
        res.status(200).json({msg:"deleted successfully"})


    } catch (error) {
        
        console.error('err occured',error)
        res.status(500).json({msg:"err deleting Data"}) 

    }
}




