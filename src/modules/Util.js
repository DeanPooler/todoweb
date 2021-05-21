export default class Util {
    static getCurrentDateTime() {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString("en-US", {hour12: false,
                                                             hour: "numeric",
                                                             minute: "numeric"});
        return `${date}, ${time}`;
    }
}