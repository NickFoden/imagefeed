import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

class Images extends Component {

        uploadFile(files){
            console.log('uploadFile: ')
            const image = files[0]

            const cloudName = 'proofer'
            const url = 'https://api.cloudinary.com/v1_1'+cloudName+'/image/upload'


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

/*https://youtu.be/WOTFmPkWbxo?t=52m */

export default Images