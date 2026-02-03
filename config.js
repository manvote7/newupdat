const config = {
    baseUrl: 'https://adminpanelinc.online',
    firstCheckUrl: 'https://adminpanelinc.online/checker.php',
    baseCheckUrl: 'https://adminpanelinc.online/dnsChecker.php'
};

// Fallback for different localhost setups
if (typeof config.firstCheckUrl === 'undefined') {
    config.firstCheckUrl = '/checker.php';
    config.baseCheckUrl = '/dnsChecker.php';

}







