

const clientController = {
    home:async(req,res,next)=>{
        res.json('hello client controller');
    }
}

module.exports =  clientController;