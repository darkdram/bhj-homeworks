let tabFrames = document.querySelectorAll('.tabs');

[...tabFrames].forEach((frame) => {
    let tabs = frame.querySelectorAll('.tab'),
        tabsContents = frame.querySelector('.tab__contents'),
        tabsContentsArray = [...tabsContents.querySelectorAll('.tab__content')];

    [...tabs].forEach((tab, index) => {
        tab.onclick = () => {
            // if tab is not active
            if (!tab.classList.contains('tab_active')) {
                // remove active selector from active tab
                let activeTab = frame.querySelector('.tab_active');
                if (activeTab) {
                    activeTab.classList.remove('tab_active');
                }
                // make current tab active
                tab.classList.add('tab_active');
                // hide active tab content
                let activeTabContent = tabsContents.querySelector('.tab__content_active');
                if (activeTabContent) {
                    activeTabContent.classList.remove('tab__content_active');
                }
                // and show content of active tab
                if (tabsContentsArray[index]) {
                    tabsContentsArray[index].classList.add('tab__content_active');
                }
            }
        };
    });
});