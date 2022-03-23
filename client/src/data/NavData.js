export const data = [
    {
        id: 1,
        title: "GESTIÓN DE MANTENIMIENTO",
        links: [
            {
                id: 11,
                name: "Solicitudes",
                url: "/",
                icon: "bi bi-briefcase",
                children: [],
                disabled: false
            },
            {
                id: 12,
                name: "Solicitudes Externas",
                url: "/",
                icon: "bi bi-send",
                children: [],
                disabled: false
            },
            {
                id: 13,
                name: "Tareas Recurrentes",
                url: "/",
                icon: "bi bi-clock",
                children: [
                    {
                        id: 131,
                        name: "Planes",
                        url: "/",
                        disabled: false
                    },
                    {
                        id: 132,
                        name: "Iteraciones",
                        url: "/",
                        disabled: false
                    }
                ],
                disabled: false
            },
            {
                id: 14,
                name: "Programaciones",
                url: "/",
                icon: "bi bi-calendar3",
                children: [],
                disabled: false
            },
            {
                id: 15,
                name: "Nueva Solicitud",
                url: "/ticket/create",
                icon: "bi bi-envelope-paper",
                children: [],
                disabled: false
            }
        ]
    },
    {
        id: 2,
        title: "INTELIGENCIA DE NEGOCIO",
        links: [
            {
                id: 21,
                name: "Tableros",
                url: "/",
                icon: "bi bi-pie-chart",
                children: [],
                disabled: false
            },
            {
                id: 22,
                name: "Reportes",
                url: "/",
                icon: "bi bi-file-earmark-bar-graph",
                children: [],
                disabled: false
            }
        ]
    },
    {
        id: 3,
        title: "GESTIÓN DE ACTIVOS",
        links: [
            {
                id: 31,
                name: "Ubicaciones",
                url: "/",
                icon: "bi bi-pie-chart",
                children: [],
                disabled: false
            },
            {
                id: 32,
                name: "Equipos",
                url: "/",
                icon: "bi bi-file-earmark-bar-graph",
                children: [],
                disabled: false
            },
            {
                id: 33,
                name: "Toma de Inventarios",
                url: "/",
                icon: "bi bi-file-earmark-bar-graph",
                children: [],
                disabled: false
            },
            {
                id: 34,
                name: "Partes e Insumos",
                url: "/",
                icon: "bi bi-file-earmark-bar-graph",
                children: [],
                disabled: false
            }
        ]
    },
    {
        id: 4,
        title: "CONFIGURACIONES",
        links: [
            {
                id: 41,
                name: "Mi Perfil",
                url: "/",
                icon: "bi bi-pie-chart",
                children: [],
                disabled: false
            },
            {
                id: 42,
                name: "Ajustes",
                url: "/",
                icon: "bi bi-file-earmark-bar-graph",
                children: [
                    {
                        id: 421,
                        name: "Mi Compañía",
                        url: "/",
                        disabled: false
                    },
                    {
                        id: 422,
                        name: "Usuarios",
                        url: "/user/create",
                        disabled: false
                    }
                ],
                disabled: false
            }
        ]
    }
];