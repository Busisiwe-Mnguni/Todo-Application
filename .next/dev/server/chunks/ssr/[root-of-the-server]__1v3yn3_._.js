module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/SDP_lab1/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// pages/index.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function Home() {
    // State for storing the list of tasks
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    // State for toggling between active and archived views
    const [showArchived, setShowArchived] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // State for the form inputs
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        title: '',
        description: '',
        due_date: '',
        topic: '',
        status: 'Todo'
    });
    // Function to fetch tasks from the API
    // Pass archived explicitly so we're not relying on stale closure state
    const fetchTasks = async (archived = showArchived)=>{
        const res = await fetch(`/api/tasks?archived=${archived ? '1' : '0'}`);
        const data = await res.json();
        setTasks(data);
    };
    // Load tasks when the page first loads, and whenever the view toggles
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchTasks(showArchived);
    }, [
        showArchived
    ]);
    // Handle form submission (Create task)
    const handleSubmit = async (e)=>{
        e.preventDefault(); // Stop page refresh
        await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        // Clear the form
        setForm({
            title: '',
            description: '',
            due_date: '',
            topic: '',
            status: 'Todo'
        });
        // A new task is always active, so make sure we're looking at the active
        // list and refresh it
        setShowArchived(false);
        fetchTasks(false);
    };
    // Handle form input changes
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    // Handle archiving a task
    const archiveTask = async (id)=>{
        await fetch('/api/tasks', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        });
        // Refresh whichever view is currently showing
        fetchTasks(showArchived);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: '20px',
            fontFamily: 'Arial'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "My Todo App"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                style: {
                    border: '1px solid #ccc',
                    padding: '15px',
                    marginBottom: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        children: "Create New Task"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        name: "title",
                        placeholder: "Title",
                        value: form.title,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        name: "description",
                        placeholder: "Description",
                        value: form.description,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        name: "due_date",
                        type: "date",
                        value: form.due_date,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        name: "topic",
                        placeholder: "Topic",
                        value: form.topic,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                        name: "status",
                        value: form.status,
                        onChange: handleChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: "Todo",
                                children: "Todo"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: "In-Progress",
                                children: "In-Progress"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                value: "Complete",
                                children: "Complete"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "submit",
                        children: "Add Task"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowArchived(false),
                        disabled: !showArchived,
                        children: "Active Tasks"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowArchived(true),
                        disabled: showArchived,
                        children: "Archived Tasks"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                children: showArchived ? 'Archived Tasks' : 'Active Tasks'
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                style: {
                    listStyle: 'none',
                    padding: 0
                },
                children: tasks.map((task)=>{
                    // Check if the task is overdue
                    const today = new Date();
                    const dueDate = new Date(task.due_date);
                    const isOverdue = dueDate < today && task.status !== 'Complete';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        style: {
                            border: '1px solid #ddd',
                            margin: '5px 0',
                            padding: '10px',
                            backgroundColor: isOverdue ? '#ffe6e6' : 'white'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: task.title
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 120,
                                columnNumber: 45
                            }, this),
                            "Topic: ",
                            task.topic,
                            " | Status: ",
                            task.status,
                            " | Due: ",
                            task.due_date,
                            isOverdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'red',
                                    fontWeight: 'bold'
                                },
                                children: "  OVERDUE"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 122,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            !showArchived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>archiveTask(task.id),
                                children: "Archive"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this)
                        ]
                    }, task.id, true, {
                        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/SDP_lab1/pages/index.js",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1v3yn3_._.js.map