// Реализуйте шаблон Decorator

export class Notifier {
    public send(): string {
        // очень сложная реализация
        return 'Message';
    }
    public sendToSlack(): string {
        // очень сложная реализация
        return 'Slack Message';
    }
    public sendToICQ(): string {
        // очень сложная реализация
        return 'ICQ Message';
    }
    public sendToVk(): string {
        // очень сложная реализация
        return 'Vk Message';
    }
    public sendByPigeonMail(): string {
        // а вдруг все отключат?
        return 'Pigeon Message';
    }
}

// Хотелось бы использовать вот так
const notifier = new Notifier()
console.log(notifier.send()) // Message

const slackNotifier = new SlackDecorator(notifier)
console.log(slackNotifier.send()) // Slack Message

const icqNotifier = new ICQDecorator(notifier)
console.log(icqNotifier.send()) // ICQ Message

const vkNotifier = new VkDecorator(notifier)
console.log(vkNotifier.send()) // Vk Message

const pigeonNotifier = new PigeonDecorator(notifier)
console.log(pigeonNotifier.send()) // Pigeon Message