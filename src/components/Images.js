import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'

class Images extends Component {

        uploadFile(files){
            console.log('uploadFile: ')
            const image = files[0]

            const cloudName = 'proofer'
            const url = 'https://api.cloudinary.com/v1_1'+cloudName+'/image/upload'

            const timestamp = Date.now()/1000
            const uploadPreset = 'on6jfv7m'

            const paramStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'dW9zgguPfWSrOwP8mQ2AyCMYu30'
            const signature = sha1(paramStr)

    }
    
    render(){
        return (
            <div>
                Images Component
                <Dropzone onDrop={this.uploadFile.bind(this)} />
            </div>
        )
    }
}

export default Images