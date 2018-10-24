let messages = [];
let id = 0;

module.exports = {
    create: (req,res) => {
        const { text, time } = req.body;
        console.log(text, time)
        // let message = {
        //     id,
        //     text,
        //     time
        // };
        messages.push({id,text,time});
        id ++;
        res.status(200).send( messages );
    },
    read: (req,res) =>{
        res.status(200).send(messages);
    },
    update: (req,res) => {
        let index = null;
        messages.forEach((message,i) => {
            if(message.id === Number(req.params.id)) index = i; 
        })
        messages[ index] = {
        id: messages[index].id,
        text: req.body.text || messages[ index ].text,
        time: messages[ index ].time
        };
        res.status(200).send( messages );
    },
    delete:(req,res) => {
        let index = null;
        messages.forEach((message,i) => {
            if(message.id === Number(req.params.id)) index = i;
        })
        messages.splice( index , 1);
        res.status(200).send( messages );
    }

}