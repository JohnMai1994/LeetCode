// 1. 可选分号

function foo() {
    return
    {
        value: 1
    };
}

console.log(typeof foo())

// 你可能会认为它的输出结果是 "object"，但是结果却是 undefined。乍一看代码好像没什么问题，但是细心一点可以看到 return 语句返回的对象放到了下一行，那么问题就来了：JavaScript 的分号是可选的，return 语句在换行后，JavaScript 会自动给它的结尾加上分号，而在 return 之后的代码都不会执行，所以 foo() 的返回结果是 undefined。解决方法是在每行结尾都写上分号，这样就能清楚的知道代码在哪里结束。


// 2. this 指向
var a = 5;
var obj = {
    a: 3,
    foo: function() {
        console.log(this.a);
    }
}

var objFoo = obj.foo;
objFoo();
// 答案为 5。在调用函数时，它内部的 this 指向的是调用对象，例如 obj.foo() this 指向的是 obj 对象。如果在全局调用函数时， this 指向的是全局对象，在浏览器中为 window。objFoo 相当于是在获取了 obj 对象的 foo 方法引用后，在全局进行调用，所以 this 指向的是 window 对象。使用 var 在顶级作用域中定义的变量会添加到 window 中，所以 objFoo() 调用打印的是全局中的 a，即 5。


// 3、数组长度#
const arr = [1, 2, 3, 4];
arr.length = 0;
console.log(arr[0]);
// 结果为 undefined, 因为 array 的 length 属性同时也能反过来控制数组的元素数量，在给 arr.length 设置为 0 时，arr 就变成了空数组，再访问里边的元素就都是 undefined 了。

// 4、提升（Hoisting)
// 函数自己提升
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
console.log(typeof bar());

// 结果为 function。使用 var 声明的变量和使用 funtion 定义的函数会提升到当前作用域的顶部，所以变量可以先赋值，后使用 var 进行声明，而函数则可以先调用后定义。但是要注意的是，使用 var 定义（指在声明的同时进行赋值）的变量，只会提升声明部分，赋值部分不会被提升，例如示例中的 var foo = '11' 会提升 var foo，但 foo = 11 保留在原位。在定义 bar() 函数时，同时会创建一个作用域，提升会把相关变量和函数放到 bar() 函数的第一行。 综合上边的规则，可以知道 foo() 函数和 foo 变量的声明进行了提升，因为 foo 变量与同名，但是只有声明，所以不会覆盖函数的值，foo 仍然指向的是函数。之后就直接使用 return 语句返回了结果，后边的代码就不会再执行了。bar() 中的代码其实是下边这种形式：


// 5、作用域与闭包
for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    });
}


