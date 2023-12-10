// 고차 함수란 다른 함수를 매개변수로 받거나 함수를 반환하는 함수를 가리킵니다. JavaScript에서 함수는 일급 객체이기 때문에 함수를 변수에 할당하거나, 다른 함수로 전달하거나, 함수 안에서 다시 함수를 반환하는 등의 작업이 가능합니다. 이러한 특성을 이용하여 함수를 다루는 함수를 만들 수 있는데, 이를 고차 함수라고 합니다.

// 예를 들어, 함수를 인자로 받아 그 함수를 이용해 새로운 함수를 만들어내는 고차 함수를 생각해볼 수 있습니다. 또한 함수를 반환하는 고차 함수도 있습니다. 아래는 간단한 예제입니다.

// 고차 함수 예제 1: 함수를 인자로 받는 고차 함수

function applyOperation(x, operation) {
    return operation(x);
}

function double(num) {
    return num * 2;
}

function triple(num) {
    return num * 3;
}

console.log(applyOperation(2, double));
console.log(applyOperation(3, triple));

// 추상적인 코드란 구체적인 세부 사항에 집중하는 대신, 문제나 작업의 핵심 아이디어에 집중하는 코드를 말합니다. 이는 코드를 단순화하고, 보다 일반적이고 유연하게 만들 수 있게 합니다.

// 예를 들어, 특정한 작업을 수행하는 함수를 추상적으로 만들 수 있습니다. 이 함수는 구체적인 입력이나 동작에 대해 명시하지 않고, 대신에 작업의 개념적인 측면에 집중합니다. 그렇게 함으로써 함수를 보다 일반적으로 활용할 수 있게 되고, 재사용성이 높아집니다.

// 추상적인 코드를 작성함으로써, 코드의 의도가 더 명확해지고 유연성과 확장성을 높일 수 있습니다. 이는 코드를 이해하고 유지보수하기 쉽게 만들어줍니다. 추상화는 프로그래밍에서 중요한 개념 중 하나이며, 객체 지향 프로그래밍이나 함수형 프로그래밍 등 다양한 패러다임에서 추상화를 통해 코드를 더 유연하고 이해하기 쉽게 만드는 것이 중요합니다.
