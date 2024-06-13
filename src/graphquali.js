// Função auxiliar para criar gráficos
function createChart(ctx, type, data, options) {
    new Chart(ctx, {
        type: type,
        data: data,
        options: options
    });
}

// Dados e opções para os gráficos
const siemData = {
    labels: ['QRadar', 'Alienvault', 'Splunk', 'Kuma'],
    datasets: [{
        data: [80, 90, 20, 10],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
    }]
};

const toolsData = {
    labels: ['Nessus', 'Tenable', 'Zabbix', 'Cacti'],
    datasets: [{
        data: [85, 95, 30, 5],
        backgroundColor: ['#ff7f7f', '#7fbfff', '#ffbf7f', '#bf7fff']
    }]
};

const officeData = {
    labels: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Dropbox'],
    datasets: [{
        data: [45, 35, 25, 15, 80],
        backgroundColor: ['#7fff7f', '#7f7fff', '#7fffff', '#bf7f7f', '#bf7fff']
    }]
};


const evolutionData = {
    labels: ['Framework CyberSecurity'],
    datasets: [
        {
            label: 'NIST',
            backgroundColor: '#4caf50',
            borderColor: '#4caf50',
            data: [100, 60, 25, 40]
        },
        {
            label: 'ISO 27001',
            backgroundColor: '#ff9800',
            borderColor: '#ff9800',
            data: [80, 55, 30, 50]
        },
        {
            label: 'PCI DSS',
            backgroundColor: '#ff5722',
            borderColor: '#ff5722',
            data: [80, 55, 30, 50]
        },
        {
            label: 'COBIT',
            backgroundColor: '#2196f3',
            borderColor: '#2196f3',
            data: [80, 55, 30, 50]
        },
        {
            label: 'MITRE ATT&CK',
            backgroundColor: '#9c27b0',
            borderColor: '#9c27b0',
            data: [90, 70, 35, 45]
        }
    ]
};



const example1Data = {
    labels: ['Sistemas Operacionais e banco de dados'],
    datasets: [
        {
            label: 'MySQL Server',
            backgroundColor: '#4caf50',
            borderColor: '#4caf50',
            data: [100, 60, 25, 40]
        },
        {
            label: 'Windows Server',
            backgroundColor: 'pink',
            borderColor: 'pink',
            data: [80, 55, 30, 50]
        },
        {
            label: 'Linux Server',
            backgroundColor: '#2196f3',
            borderColor: '#2196f3',
            data: [90, 70, 35, 45]
        },
        {
            label: 'OracleDB',
            backgroundColor: '#ff5722',
            borderColor: '#ff5722',
            data: [80, 55, 30, 50]
        },
        {
            label: 'Microsoft SQL Server',
            backgroundColor: '#9c27b0',
            borderColor: '#9c27b0',
            data: [80, 55, 30, 50]
        },
        {
            label: 'MongoDB',
            backgroundColor: '#ff9800',
            borderColor: '#ff9800',
            data: [90, 70, 35, 45]
        }
    ]
};


const example2Data = {
    labels: ['Excell', 'Powerpoint', 'Word', 'Powerbi', 'Outlook'],
    datasets: [{
        label: 'Dados office',
        data: [85, 55, 75, 60, 50],
        backgroundColor: ['#4caf50', '#ff9800', '#cc65fe', '#36a2eb', '#ffce56']
    }]
};

const solarFlareData = {
    labels: ['Fortigate', 'CISCO', 'Palo Alto', 'ModSecurity', 'Juniper Network'],
    datasets: [{
        data: [65, 70, 55, 70, 30],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#4caf50', '#ffce56']
    }]
};

const radarData = {
    labels: ['JavaScript', 'Java', 'Python', 'PHP', 'SQL'],
    datasets: [
        {
            label: 'Frontend',
            data: [90, 10, 60, 20, 10], // Habilidades de Frontend (JavaScript, Java, Python, PHP, SQL)
            backgroundColor: function(context) {
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                if (!chartArea) {
                    // This case happens on initial chart load
                    return null;
                }
                return getGradient(ctx, chartArea, 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)');
            },
            borderColor: 'rgba(255, 99, 132, 1)', // Cor da borda do gráfico
            pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Cor de preenchimento dos pontos
            pointBorderColor: '#fff', // Cor da borda dos pontos
            pointHoverBackgroundColor: '#fff', // Cor de preenchimento dos pontos ao passar o mouse
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)' // Cor da borda dos pontos ao passar o mouse
        },
        {
            label: 'Backend',
            data: [10, 80, 75, 20, 75], // Habilidades de Backend (JavaScript, Java, Python, PHP, SQL)
            backgroundColor: function(context) {
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                if (!chartArea) {
                    // This case happens on initial chart load
                    return null;
                }
                return getGradient(ctx, chartArea, 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)');
            },
            borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda do gráfico
            pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Cor de preenchimento dos pontos
            pointBorderColor: '#fff', // Cor da borda dos pontos
            pointHoverBackgroundColor: '#fff', // Cor de preenchimento dos pontos ao passar o mouse
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)' // Cor da borda dos pontos ao passar o mouse
        }
    ]
};

// Function to create the gradient
function getGradient(ctx, chartArea, color1, color2) {
    const gradient = ctx.createLinearGradient(chartArea.left, chartArea.top, chartArea.right, chartArea.bottom);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}






const stackedBarData = {
    labels: ['MBTI(ENFJ)', 'Temperamento', 'Inteligências'],
    datasets: [{
        label: 'Extroversão (MBTI)',
        data: [70, 0, 0], // ENFJ: 70, Temperamento: 0, Inteligências: 0
        backgroundColor: '#ff6384'
    },{
        label: 'Sentimento (MBTI)',
        data: [55, 0, 0], // ENFJ: 55, Temperamento: 0, Inteligências: 0
        backgroundColor: '#ff9f40'
    }, {
        label: 'Intuição (MBTI)',
        data: [80, 0, 0], // ENFJ: 80, Temperamento: 0, Inteligências: 0
        backgroundColor: '#ffcd56'
    }, {
        label: 'Julgamento (MBTI)',
        data: [80, 0, 0], // ENFJ: 80, Temperamento: 0, Inteligências: 0
        backgroundColor: '#4bc0c0'
    }, {
        label: 'Colérico',
        data: [0, 10, 0], // ENFJ: 0, Temperamento: 10, Inteligências: 0
        backgroundColor: '#ffcc00'
    }, {
        label: 'Fleumático',
        data: [0, 40, 0], // ENFJ: 0, Temperamento: 40, Inteligências: 0
        backgroundColor: '#ff6600'
    }, {
        label: 'Sanguíneo',
        data: [0, 35, 0], // ENFJ: 0, Temperamento: 35, Inteligências: 0
        backgroundColor: '#ffff00'
    }, {
        label: 'Melancólico',
        data: [0, 20, 0], // ENFJ: 0, Temperamento: 20, Inteligências: 0
        backgroundColor: '#9966cc'
    }, {
        label: 'Lógico-Matemática',
        data: [0, 0, 80], // ENFJ: 0, Temperamento: 0, Inteligências: 80
        backgroundColor: '#00cc00'
    }, {
        label: 'Interpessoal',
        data: [0, 0, 90], // ENFJ: 0, Temperamento: 0, Inteligências: 90
        backgroundColor: '#ff6699'
    }, {
        label: 'Linguística',
        data: [0, 0, 87], // ENFJ: 0, Temperamento: 0, Inteligências: 87
        backgroundColor: '#36a2eb'
    }, {
        label: 'Espacial',
        data: [0, 0, 75], // ENFJ: 0, Temperamento: 0, Inteligências: 75
        backgroundColor: '#cc65fe'
    }, {
        label: 'Corporal-Cinestésica',
        data: [0, 0, 50], // ENFJ: 0, Temperamento: 0, Inteligências: 50
        backgroundColor: '#ff9900'
    }, {
        label: 'Naturalista',
        data: [0, 0, 10], // ENFJ: 0, Temperamento: 0, Inteligências: 10
        backgroundColor: '#009999'
    }, {
        label: 'Musical',
        data: [0, 0, 20], // ENFJ: 0, Temperamento: 0, Inteligências: 20
        backgroundColor: '#ff33cc'
    }, {
        label: 'Intrapessoal',
        data: [0, 0, 85], // ENFJ: 0, Temperamento: 0, Inteligências: 85
        backgroundColor: '#cc9900'
    }]
};


// Configurações do gráfico
const stackedBarOptions = {
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
    }
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: true
    },
    legend: {
        display: true,
        position: 'top',
        align: 'start', // Adiciona alinhamento
        labels: {
            boxWidth: 20,
            padding: 15,
            fontSize: 14 // Aumenta o tamanho da fonte para melhor legibilidade
        }
    }
};

// Criação dos gráficos com títulos
createChart(document.getElementById('siemChart').getContext('2d'), 'doughnut', siemData, { ...chartOptions, title: { text: 'Domínio de Ferramentas SIEM' } });
createChart(document.getElementById('toolsChart').getContext('2d'), 'pie', toolsData, { ...chartOptions, title: { text: 'Domínio de Outras Ferramentas' } });
createChart(document.getElementById('officeChart').getContext('2d'), 'pie', officeData, { ...chartOptions, title: { text: 'Domínio de Ferramentas de Office' } });
createChart(document.getElementById('evolutionChart').getContext('2d'), 'bar', evolutionData, { ...chartOptions, title: { text: 'Evolução das Skills de Hardening e Compliance (anos)' }, scales: { y: { beginAtZero: true } } });
createChart(document.getElementById('example1Chart').getContext('2d'), 'bar', example1Data, { ...chartOptions, title: { text: 'Exemplo de Gráfico 1' }, scales: { y: { beginAtZero: true } } });
createChart(document.getElementById('example2Chart').getContext('2d'), 'bar', example2Data, { ...chartOptions, title: { text: 'Exemplo de Gráfico 2' }, scales: { y: { beginAtZero: true } } });
createChart(document.getElementById('solarFlareChart').getContext('2d'), 'pie', solarFlareData, { ...chartOptions, title: { text: 'Gráfico de Explosão Solar' } });
createChart(document.getElementById('radarChart').getContext('2d'), 'radar', radarData, { ...chartOptions, title: { text: 'Gráfico de Radar' } });
createChart(document.getElementById('stackedBarChart').getContext('2d'), 'bar', stackedBarData, { ...chartOptions, title: { text: 'Gráfico de Barras 3D Empilhadas' }, scales: { y: { beginAtZero: true, stacked: true }, x: { stacked: true } } });