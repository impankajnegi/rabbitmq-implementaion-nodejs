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
        channel.assertQueue(queName, {durable: false})
        channel.consume(queName, (message)=>{
            console.log(`We got the message ${message.content.toString()}`)
            channel.ack(message)
        })
    })
})