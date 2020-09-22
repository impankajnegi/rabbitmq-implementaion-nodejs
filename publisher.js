const amqp = require('amqplib/callback_api');

amqp.connect(`amqp://localhost`, (err, connection)=>{
    if(err){
        throw err
    }

    connection.createChannel((err, channel)=>{
        if(err){
            throw err
        }

        queName = "MyFirstQueue"
        myMessage = "This is my first message"

        channel.assertQueue(queName, {durable: false})

        channel.sendToQueue(queName, Buffer.from(myMessage))

        setTimeout(() => {
            connection.close()
        }, 1000);
    })
})