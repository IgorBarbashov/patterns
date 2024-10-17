# Patterns 2024: Unit 1

[Unit index](../README.md)

## Structure and Modularity (Week 1-4)

Why do we need rethinking and adapting GoF, SOLID, and GRASP
for JavaScript/TypeScript realities. How to do it?

Symbols/legend: ⭐ Required, 💡 Optional, 🧑‍🎓 Difficult, 💻 Code examples, 🧑‍💻 Tasks, 🎧 Q&A Calls

- 📆 Week 1: Code Characteristics and Optimization Strategies
  - 🧩 There is a path that leads to radical improvement of the structure and
    characteristics of your code. GoF, SOLID, GRASP principles and
    patterns, how to apply them and what do we get. Code characteristics:
    readability (understanding), reliability, testability,
    maintainability, reusability, flexibility, security. Optimal use of
    computing resources: processor, memory, input-output and cognitive
    resources of developers.
  - ⭐ [Характеристики кода и стратегии оптимизации, V8 машинерия, SOLID:SRP, SoC](https://youtu.be/ZzGPZ4d8K-8) | [summary](week_1_code_characteristics_and_optimization_strategies/lecture_summaries/01_code_characteristics.md)
  - 💻 [Code examples from lecture](week_1_code_characteristics_and_optimization_strategies/code_examples_from_lecture)
  - 🧑‍💻 [Practical tasks](week_1_code_characteristics_and_optimization_strategies/practical_tasks)
  - 💡 [Принципы SOLID](https://youtu.be/B2guSV8EMn0)
  - 💡 Принципы GRASP: [👉 часть 1](https://youtu.be/vm8p4jIQwp4) | [summary](week_1_code_characteristics_and_optimization_strategies/lecture_summaries/03_grasp_part_1.md), [👉 часть 2](https://youtu.be/aJGB7TLwiig) | [summary](week_1_code_characteristics_and_optimization_strategies/lecture_summaries/04_grasp_part_2.md)
  - 💡 Принципы GRASP: [еще одна лекция](https://youtu.be/ExauFjYV_lQ) | [summary](week_1_code_characteristics_and_optimization_strategies/lecture_summaries/05_grasp_part_3.md)

[//]: # (  - 💡 [Паттерны GoF]&#40;https://youtu.be/AQ21QE1BJrc&#41;)

[//]: # (  - 💡 [Мономорфный и полиморфный код, инлайн-кэш, скрытые классы в JavaScript]&#40;https://www.youtube.com/watch?v=9JUY3prnCQ4&#41;)

[//]: # (  - 🧑‍🎓 [What's up with monomorphism? By Vyacheslav Egorov]&#40;https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html&#41;)

[//]: # (- 📆 Week 2: Native features in language and platforms)

[//]: # (  - JavaScript has built-in contracts: Thenable, Iterable, AsyncIterator,)

[//]: # (    Callback-last, Callable, Cancelable, Observable, but the culture of)

[//]: # (    developing through contracts and interfaces is not popular enough in)

[//]: # (    the community. How can we improve development performance with)

[//]: # (    Knowledge-driven approach. How patterns may help us in this direction:)

[//]: # (    to delivery quick and effective, to be performant, to make everydays)

[//]: # (    work interesting, to be motivated and never burnout.)

[//]: # (  - ⭐ [Контракты `Callback` и `Callback-last-error-first`]&#40;https://youtu.be/vcOGCWL-eZc&#41;)

[//]: # (  - ⭐ [Контракт `Thenabe`]&#40;https://youtu.be/CHQcDllD_io&#41;)

[//]: # (  - 💡 [Thenable из старой лекции]&#40;https://youtu.be/Jdf_tZuJbHI&#41;)

[//]: # (- 📆 Week 3: Instantiation: Creational Patterns and Techniques)

[//]: # (  - Creational patterns: Constructor, Singleton, Factory, Pool, Builder,)

[//]: # (    Prototype, Flyweight, other patterns and techniques. Let’s find)

[//]: # (    related principles and rethink applied importance of GRASP: Creator;)

[//]: # (    GRASP: Polymorphism, SOLID: ISP; Aggregation and Composition. How to)

[//]: # (    Save memory and other resources; how to use optimizations and caching.)

[//]: # (    How to develop extremely quick and low-latency code for any devices)

[//]: # (    we need to support and make this code clear for colleagues.)

[//]: # (- 📆 Week 4: Isolation and Separation of Concerns)

[//]: # (  - SoC is a general engineering principle to build flexible, reliable,)

[//]: # (    and easy-modifying systems. We may use GoF patterns: Mediator, Bridge,)

[//]: # (    Abstract factory, Strategy &#40;JavaScript-specific implementation:)

[//]: # (    Map<PropertyKey, Implementation>&#41;; Modularity; GRASP: Information)

[//]: # (    Expert, Indirection, and Protected variations principles; SOLID: SRP;)

[//]: # (    This will improve code testability and reduce integration expenses.)

[//]: # (  - ⭐ [Структура приложений: системы модульности, пакеты и зависимости]&#40;https://youtu.be/d6DjTAAHxPU&#41;)

[//]: # (  - ⭐ [Слои и внедрение зависимостей]&#40;https://youtu.be/O3TeD5yU9aw&#41;)

[//]: # ()
[//]: # (## Q&A recordings)

[//]: # ()
[//]: # (| Week | Monday | Tuesday | Wednesday | Thursday |)

[//]: # (| ---- | ------ | ------- | --------- | -------- |)

[//]: # (|    0 |  | [🧩 Welcome meetup 🚀]&#40;https://youtu.be/Hcv1TYxcQ3g&#41; |  | [🎧 Community call #172]&#40;https://youtu.be/eHe96iWD-iM&#41; |)

[//]: # (|    1 | [🎧 Patterns Q&A #1]&#40;https://youtu.be/R8Jvj8yS5oM&#41; | [🎧 Node.js Q&A #37]&#40;https://youtu.be/YquMya5MMXs&#41; | [🎧 Async Q&A #39]&#40;https://youtu.be/wIZSWocOlWE&#41; | [🎧 Community call #173]&#40;https://youtu.be/TdA3sHJTg4Q&#41; |)

[//]: # ()
[//]: # (## Patterns catalog)

[//]: # ()
[//]: # (- 🧩 Gof Patterns)

[//]: # (  - 📢 [GoF patterns for Node.js and JavaScript &#40;seminar fragment&#41;]&#40;https://youtu.be/7TjzsZCQQqg&#41;)

[//]: # (  - 🏭 Creational patterns)

[//]: # (    - Abstract factory)

[//]: # (    - [Builder]&#40;https://github.com/HowProgrammingWorks/Builder&#41;)

[//]: # (    - [Factory method]&#40;https://github.com/HowProgrammingWorks/Factory&#41;)

[//]: # (    - [Prototype]&#40;https://github.com/HowProgrammingWorks/PrototypePattern&#41; do not confuse with [Prototype-programming]&#40;https://github.com/HowProgrammingWorks/Prototype&#41;)

[//]: # (    - [Singleton]&#40;https://github.com/HowProgrammingWorks/Singleton&#41;)

[//]: # (  - 🤝 Structural patterns)

[//]: # (    - [Adapter]&#40;https://github.com/HowProgrammingWorks/Adapter&#41;)

[//]: # (    - [Bridge]&#40;https://github.com/HowProgrammingWorks/Bridge&#41;)

[//]: # (    - [Composite]&#40;https://github.com/HowProgrammingWorks/Composite&#41;)

[//]: # (    - [Decorator]&#40;&#41;)

[//]: # (    - [Facade]&#40;https://github.com/HowProgrammingWorks/Facade&#41;)

[//]: # (    - [Flyweight]&#40;https://github.com/HowProgrammingWorks/Flyweight&#41;)

[//]: # (    - [Proxy]&#40;https://github.com/HowProgrammingWorks/Proxy&#41;)

[//]: # (  - ⚡ Behavioral patterns)

[//]: # (    - Chain of responsibility)

[//]: # (      - [Chain of responsibility]&#40;https://github.com/HowProgrammingWorks/ChainOfResponsibility&#41;)

[//]: # (      - Middleware)

[//]: # (    - [Command]&#40;https://github.com/HowProgrammingWorks/Command&#41;)

[//]: # (    - Interpreter)

[//]: # (    - [Iterator]&#40;https://github.com/HowProgrammingWorks/Iterator&#41;)

[//]: # (    - Mediator)

[//]: # (    - Memento)

[//]: # (    - Observable and Observer: EventEmitter, EventTarget)

[//]: # (      - [EventTarget and EventEmitter]&#40;https://github.com/HowProgrammingWorks/Events&#41;)

[//]: # (      - [EventEmitter]&#40;https://github.com/HowProgrammingWorks/EventEmitter&#41;)

[//]: # (      - [Observer]&#40;https://github.com/HowProgrammingWorks/Observer&#41;)

[//]: # (    - State)

[//]: # (    - [Strategy]&#40;https://github.com/HowProgrammingWorks/Strategy&#41;)

[//]: # (    - Template method)

[//]: # (    - [Visitor]&#40;https://github.com/HowProgrammingWorks/Visitor&#41;)

[//]: # (- 🧩 GRASP patterns)

[//]: # (  - 📢 Intro video)

[//]: # (    - [GRASP Overview]&#40;https://youtu.be/ExauFjYV_lQ&#41;)

[//]: # (    - Part 1 - [GRASP for Node.js and Javascript]&#40;https://youtu.be/vm8p4jIQwp4&#41;)

[//]: # (    - Part 2 - coming soon)

[//]: # (  - [Information expert]&#40;https://youtu.be/cCHL329_As0&#41;)

[//]: # (  - Creator)

[//]: # (  - Controller)

[//]: # (  - Indirection)

[//]: # (  - [Low coupling]&#40;https://youtu.be/IGXdPOZ3Fyk&#41;)

[//]: # (  - [High cohesion]&#40;https://youtu.be/IGXdPOZ3Fyk&#41;)

[//]: # (  - Polymorphism)

[//]: # (  - Protected variations)

[//]: # (  - [Pure fabrication]&#40;https://youtu.be/CV577a0RHBM&#41;)

[//]: # (  - [Real code examples]&#40;https://youtu.be/4AMVQ2-2DcM&#41;)

[//]: # (- 🧩 SOLID Patterns)

[//]: # (  - 📢 Intro video: [SOLID for Node.js and Javascript]&#40;https://youtu.be/B2guSV8EMn0&#41;)

[//]: # (  - [SOLID Interview questions]&#40;https://youtu.be/-9OM6-6pZw8&#41;)

[//]: # (  - [Single responsibility principle]&#40;https://youtu.be/o4bQywkBKOI&#41;)

[//]: # (  - Open/closed principle)

[//]: # (  - [Liskov substitution principle]&#40;https://youtu.be/RbhYxygxroc&#41;)

[//]: # (  - Interface segregation principle)

[//]: # (  - Dependency inversion principle)