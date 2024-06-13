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
        data: [40, 40, 20, 10],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
    }]
};

const toolsData = {
    labels: ['Nessus', 'Tenable', 'Zabbix', 'Cacti'],
    datasets: [{
        data: [30, 40, 25, 5],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe']
    }]
};

const officeData = {
    labels: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Dropbox'],
    datasets: [{
        data: [20, 30, 25, 15, 10],
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#cc65fe', '#ffce56']
    }]
};

const evolutionData = {
    labels: ['Framework CyberSecurity',],
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
            backgroundColor: '#ff9800',
            borderColor: '#36a2eb',
            data: [80, 55, 30, 50]
        },

{
            label: 'COBIT',
            backgroundColor: '#ff9800',
            borderColor: '#ff9800',
            data: [80, 55, 30, 50]
        },
        {
            label: 'MITRE ATT&CK',
            backgroundColor: '#2196f3',
            borderColor: '#2196f3',
            data: [90, 70, 35, 45]
        }
    ]
};


const example1Data= {
    labels: ['Sistemas Operacionais e banco de dados',],
    datasets: [
        {
            label: 'MySQL Server',
            backgroundColor: '#4caf50',
            borderColor: '#4caf50',
            data: [100, 60, 25, 40]
        },
        {
            label: 'Windows Server',
            backgroundColor: '#ff9800',
            borderColor: '#ff9800',
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
            backgroundColor: '#ff9800',
            borderColor: '#36a2eb',
            data: [80, 55, 30, 50]
        },

{
            label: 'Microsoft SQL Server',
            backgroundColor: '#ff9800',
            borderColor: '#ff9800',
            data: [80, 55, 30, 50]
        },

        {
            label: 'MongoDB',
            backgroundColor: '#2196f3',
            borderColor: '#2196f3',
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
    labels: ['Flare A', 'Flare B', 'Flare C'],
    datasets: [{
        data: [25, 50, 25],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
    }]
};

const radarData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: 'Dataset 1',
        data: [65, 59, 90, 81],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
    }, {
        label: 'Dataset 2',
        data: [28, 48, 40, 19],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
    }]
};

const stackedBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5],
        backgroundColor: '#ff6384'
    }, {
        label: 'Dataset 2',
        data: [2, 3, 20, 5],
        backgroundColor: '#36a2eb'
    }, {
        label: 'Dataset 3',
        data: [3, 10, 13, 15],
        backgroundColor: '#cc65fe'
    }]
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