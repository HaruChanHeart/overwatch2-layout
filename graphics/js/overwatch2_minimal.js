const tierName = nodecg.Replicant('tierName');
const tierLevel = nodecg.Replicant('tierLevel');

const victory = nodecg.Replicant('victory');
const defeat = nodecg.Replicant('defeat');

// skillrate change
tierName.on('change', newVal => {
    if (newVal == 'topranker') {
    	document.getElementById('tiername').innerText = "TOP 500";
        document.getElementById('tierlevel').classList.add('disable');
    }
    else {
    	document.getElementById('tiername').innerText = newVal.toUpperCase();
        document.getElementById('tierlevel').classList.remove('disable');
    }
})

tierLevel.on('change', newVal => {
    document.getElementById('tierlevel').innerText = newVal;
})

victory.on('change', newVal => {
    document.getElementById('victory').innerText = newVal;
})

defeat.on('change', newVal => {
    document.getElementById('defeat').innerText = newVal;
})