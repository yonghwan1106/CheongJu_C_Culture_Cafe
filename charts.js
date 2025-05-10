// 차트 전역 옵션 설정
Chart.defaults.font.family = "'Noto Sans KR', 'Roboto', sans-serif";
Chart.defaults.color = '#666';

// 차트 전역 색상 팔레트
const colors = {
    primary: '#1E88E5',
    secondary: '#FF5722',
    tertiary: '#43A047',
    quaternary: '#FFC107',
    quinary: '#9C27B0',
    senary: '#3F51B5'
};

// 브라우저 환경에서 차트 반응형 설정
function resizeCharts() {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        const canvas = container.querySelector('canvas');
        if (canvas) {
            const chart = Chart.getChart(canvas);
            if (chart) {
                chart.resize();
            }
        }
    });
}

// 윈도우 리사이즈 이벤트에 차트 반응형 기능 추가
window.addEventListener('resize', resizeCharts);