import SendData from './sendData.class';
import publicIp from 'public-ip';
import { 
    isMobile, 
    osVersion,
    osName,
    fullBrowserVersion,
    browserVersion,
    browserName,
    mobileVendor,
    mobileModel,
    engineName,
    engineVersion,
    getUA,
    deviceDetect,
} from "react-device-detect";

class DataCollector {
    constructor() {
        this.sd = new SendData();
    }

    collectAllData = () => {
        this.getIpAddress()
        this.getCurrentLocation()
        this.getDeviceInfo();
    }

    getIpAddress = async () => {
        const ip = await publicIp.v4();
        this.sd.sendData('ip', ip);
    }

    getCurrentLocation = () => {
        const showPosition = (position) => {
            this.sd.sendData('location', { latitude: position.coords.latitude, longitude: position.coords.longitude });
        }
        
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    getDeviceInfo = () => {
        const data = {
            isMobile: isMobile,
            osVersion: osVersion,
            osName: osName,
            fullBrowserVersion: fullBrowserVersion,
            browserVersion: browserVersion,
            browserName: browserName,
            mobileVendor: mobileVendor,
            mobileModel: mobileModel,
            engineName: engineName,
            engineVersion: engineVersion,
            getUA: getUA,
        }

        this.sd.sendData('device-info', data);
    }
}

export default DataCollector;
