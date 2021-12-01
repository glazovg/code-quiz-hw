const quiz = {
    q1: {
        q: "Inside which element do you put JavaScript?",
        ans: {
            a1: "<var>",
            a2: "<script>",
            a3: "<section>",
            a4: "<code>"
        },
        s: "<script>"
    },
    q2: {
        q: "How do you declare a new date in JavaScript?",
        ans: {
            a1: "var date = Date();",
            a2: "var date = date('now');",
            a3: "var date = new Date();",
            a4: "var date = date().current();"
        },
        s: "var date = new Date();"
    },
    q3: {
        q: "How do you round the number 5.35 to the nearest integer?",
        ans: {
            a1: "rnd(5.35)",
            a2: "Math.rnd(5.35)",
            a3: "round(5.35)",
            a4: "Math.round(5.35)",
        },
        s: "Math.round(5.35)"
    },
    q4: {
        q: "How do you open a new window with JavaScript?",
        ans: {
            a1: "window.open(...);",
            a2: "window.new(...);",
            a3: "open(new window());",
            a4: "window.open_new(...);"
        },
        s: "window.open(...);"
    },
    q5: {
        q: "How do you get cookies in JavaScript?",
        ans: {
            a1: "window.cookies",
            a2: "location.cookies",
            a3: "document.cookie",
            a4: "document.cookies"
        },
        s: "document.cookie"
    },
    q6: {
        q: "How do you get the DOM element with id in JavaScript?",
        ans: {
            a1: "window.getElementById(...)",
            a2: "document.getElementById(...)",
            a3: "page.getElementById(...)",
            a4: "document.innerHTML.getElementById(...)"
        },
        s: "document.getElementById(...)"
    },
    q7: {
        q: "Can you set any style to HTML tag using JavaScript?",
        ans: {
            a1: "yes",
            a2: "no"
        },
        s: "yes"
    },
    q8: {
        q: "Which is undefined variable?:\nvar1 = '12';\nif ( var2 ) {\n delete var2;\n}\n else if ( var1 ) {\n delete var1;\n}",
        ans: {
            a1: "None",
            a2: "both",
            a3: "only var1",
            a4: "only var2"
        },
        s: "only var2"
    },
    q9: {
        q: "Which of the following is the correct syntax for opening a new window called 'bootCamp'?",
        ans: {
            a1: "bootCamp = window.open.new('http://www.bootCamp.com');",
            a2: "bootCamp = window.new('http://www.bootCamp.com');",
            a3: "bootCamp = window.open('http://www.bootCamp.com');",
            a4: "bootCamp = window('http://www.bootCamp.com');"
        },
        s: "bootCamp = window.open('http://www.bootCamp.com');"
    },
    q10: {
        q: "Which of the following is the correct way to write an array?",
        ans: {
            a1: 'let fruits = new Array(1:"apple",2:"peach",3:"banana");',
            a2: 'let fruits = new Array:1=(" apple ")2=("peach")3=("banana");',
            a3: 'let fruits = new Array("apple ","peach","banana");',
            a4: 'let fruits = new Array="apple","peach","banana";'
        },
        s: 'let fruits = new Array("apple ","peach","banana");'
    },
    q11: {
        q: "Which of the following is the correct way to write “Hello World” on the web page?",
        ans: {
            a1: 'document.write(“Hello World”);',
            a2: 'system.out.println(“Hello World”);',
            a3: 'print(“Hello World”);',
            a4: 'response.write(“Hello World”);'
        },
        s: 'document.write(“Hello World”);'
    },
    q12: {
        q: "The pop() method removes the last item from an array and returns a new array.",
        ans: {
            a1: "true",
            a2: "false"
        },
        s: "false"
    },
    q13: {
        q: "Which of the following is used to identify the array?",
        ans: {
            a1: "===",
            a2: "typeof",
            a3: "isarrayType()",
            a4: "=="
        },
        s: ""
    },
    q14: {
        q: "What will be the output of the following code piece?\nlet arr = [1,2,3,4,5];\narr.slice(0,3);",
        ans: {
            a1: "Returns [4,5]",
            a2: "Returns [1,2,3,4]",
            a3: "Returns [1,2,3]",
            a4: "Returns [1,2,3,4,5]",
        },
        s: "Returns [1,2,3]"
    },
    q15: {
        q: "What will be the result of the following code snippet?\nlet stringToNum=parseInt(“123ab”)",
        ans: {
            a1: "123",
            a2: "Exception",
            a3: "123ab",
            a4: "NaN",  
        },
        s: "123"
    }
}