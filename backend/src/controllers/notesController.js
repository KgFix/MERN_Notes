export function getAllNotes(request,response){
     response.status(200).send("it works man!");
}

export function createNote(request,response){
     response.status(201).json({message:"Note created succesfully"})
}

export function updateNote(request,response){
    response.status(201).json({message:"Note updated succesfully"})
}

export function deleteNote(request,response){
     response.status(201).json({message:"Note deleted succesfully"})
}