export class Notifier {
    public send(): string {
        // очень сложная реализация
        return 'Message';
    }
}

class SlackDecorator extends Notifier {
    notifier: Notifier;

    constructor(notifier: Notifier) {
        super();
        this.notifier = notifier;
    }

    public send(): string {
        return `Slack ${this.notifier.send()}`;
    }
};

class ICQDecorator extends Notifier {
    notifier: Notifier;

    constructor(notifier: Notifier) {
        super();
        this.notifier = notifier;
    }

    public send(): string {
        return `ICQ ${this.notifier.send()}`;
    }
};

class VkDecorator extends Notifier {
    notifier: Notifier;

    constructor(notifier: Notifier) {
        super();
        this.notifier = notifier;
    }

    public send(): string {
        return `Vk ${this.notifier.send()}`;
    }
};

class PigeonDecorator extends Notifier {
    notifier: Notifier;

    constructor(notifier: Notifier) {
        super();
        this.notifier = notifier;
    }

    public send(): string {
        return `Pigeon ${this.notifier.send()}`;
    }
};

// Хотелось бы использовать вот так
const notifier = new Notifier();
console.log(notifier.send()); // Message

const slackNotifier = new SlackDecorator(notifier);
console.log(slackNotifier.send()); // Slack Message

const icqNotifier = new ICQDecorator(notifier);
console.log(icqNotifier.send()); // ICQ Message

const vkNotifier = new VkDecorator(notifier);
console.log(vkNotifier.send()); // Vk Message

const pigeonNotifier = new PigeonDecorator(notifier);
console.log(pigeonNotifier.send()); // Pigeon Message