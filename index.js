
// INCREASE HEART NUMBER

const allHeartLogo = document.getElementsByClassName('heart-logo')
for(const heart of allHeartLogo)
{
    heart.addEventListener('click', function()
{
    const TrackCurrenTotalHeartNumber = document.getElementById('heart-count-display');
    let currenTotalHeartNumber = Number(TrackCurrenTotalHeartNumber.innerText);
    currenTotalHeartNumber++;
    TrackCurrenTotalHeartNumber.innerText = currenTotalHeartNumber;
})
}

// CALL ALERT AND DECREASE COINS

const allCallBtns = document.getElementsByClassName('call-btn')
for(const callBtn of allCallBtns)
{
    callBtn.addEventListener('click',function(){
        const trackTitle = callBtn.parentNode.parentNode;
        const title = trackTitle.querySelector('.service-name');
        const trackHotlineNumber = trackTitle.querySelector('.hotline-number');
        const coinDisplayNumberTrack = document.getElementById('coin-display');
        let coinDisplayNumber = Number(coinDisplayNumberTrack.innerText);
        const currenCoinNumber = coinDisplayNumber - 20;
        if(currenCoinNumber>=0)
        {
            alert('📞Calling ' + title.innerText + ' ' + trackHotlineNumber.innerText + '...');
            coinDisplayNumberTrack.innerText = currenCoinNumber;
        }
        else
        {
            alert("❌আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০টি কয়েন লাগবে।");
        }
    })
}

// COPY NUMBER

const allCopyBtns = document.getElementsByClassName('copy-btn');
for(const copyBtn of allCopyBtns)
{
    copyBtn.addEventListener('click',function(){
        const getHotlineNumber = copyBtn.parentNode.parentNode;
        const finalHotlineNumber =  getHotlineNumber.querySelector('.hotline-number').innerText;
        navigator.clipboard.writeText(finalHotlineNumber);
        alert(finalHotlineNumber + " copied");
        let copyCountDisplay = Number(document.getElementById('copy-count-display').innerText);
        copyCountDisplay++;
        document.getElementById('copy-count-display').innerText = copyCountDisplay;
    })
}
