import express from "express"
import { getNotes,delNotes,postNotes,putNotes,getNotesById } from "../controllers/notesControllers.js"

const router = express.Router()


router.get('/',getNotes)
router.get('/:id',getNotesById)
router.post('/',postNotes)
router.put('/:id',putNotes)
router.delete('/:id',delNotes)




export default router
