import EventEmitter from 'eventemitter3';

class SystemEmitter {
    private eventEmitter: EventEmitter;
    private timerId?: NodeJS.Timeout | null;
    private systemType: symbol;

    constructor(systemType: symbol, callback: (value: string) => void) {
        this.timerId = null;
        this.systemType = systemType;
        this.eventEmitter = new EventEmitter();

        this.eventEmitter.on(systemType, (value) => {
            callback(value);
        })
    }

    public start = () => {
        this.timerId = this.runRandomGenerator();
    }

    public stop = () => {
        if (!this.timerId) {
            return;
        }

        clearTimeout(this.timerId);
        this.timerId = null;
    }

    private runRandomGenerator = (): NodeJS.Timeout => {
        return setTimeout(
            () => {
                this.eventEmitter.emit(this.systemType, this.getRandomString())
                this.start()
            },
            this.getRandomDelay()
        )
    }

    private getRandomString = () => {
        return this.getRandomInt(0, 100).toString();
    }

    private getRandomDelay = () => {
        return this.getRandomInt(100, 2000);
    }

    private getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * Math.floor(max)) + min;
    }
}

export default SystemEmitter;