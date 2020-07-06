import amazon from '../../assets/images/aws.png'
import azure from '../../assets/images/azure.png'
import alibaba from '../../assets/images/alibaba.png'
import Googlecloud from '../../assets/images/cloud.png'
import React from '../../assets/images/react.png'
import vue from '../../assets/images/vue.png'
import babel from '../../assets/images/babel.jpg'
import angular from '../../assets/images/angular.png'
import android from '../../assets/images/android.jpg'
import apple from '../../assets/images/apple.png'
import linux from '../../assets/images/linux.svg'
import windows from '../../assets/images/windows.png'
import india from '../../assets/images/india.jpg'
import California from '../../assets/images/California.jpg'
import newyork from '../../assets/images/newyork.jpg'
import Noida from '../../assets/images/Noida.jpg'



const appData = [
    { id: 1, name: 'React', icon: React, count: 0 },
    { id: 2, name: 'Vue', icon: vue, count: 0 },
    { id: 3, name: 'Babel', icon: babel, count: 0 },
    { id: 4, name: 'Angular', icon: angular, count: 0 },

]
const machineData = [
    { id: 1, name: 'Android', icon: android, count: 0 },
    { id: 2, name: 'Windows', icon: windows, count: 0 },
    { id: 3, name: 'Linux', icon: linux, count: 0 },
    { id: 4, name: 'Mac', icon: apple, count: 0 },

]
const cloudData = [
    { id: 1, name: 'AWS', icon: amazon, count: 0 },
    { id: 2, name: 'Azure', icon: azure, count: 0 },
    { id: 3, name: 'Alibaba', icon: alibaba, count: 0 },
    { id: 4, name: 'GoogleCloud', icon: Googlecloud, count: 0 },

]
const locationData = [
    { id: 1, name: 'India', icon: india, count: 0 },
    { id: 2, name: 'NewYork', icon: newyork, count: 0 },
    { id: 3, name: 'California', icon: California, count: 0 },
    { id: 4, name: 'Noida', icon: Noida, count: 0 },

]

const OverviewHelper = {
    dataFormatter,
    appData,
    cloudData,
    machineData,
    locationData

}

function dataFormatter(responce, cardData) {

    Object.values(responce)[0].map(item => {

        cardData.map(app => {
            if (item.name.toLowerCase().localeCompare(app.name.toLowerCase()) === 0) {
                app.count = item.value;
            }
            return null;
        }
        )
        return null
    })
    return cardData;
}


export default OverviewHelper;