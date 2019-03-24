class AppService {

    constructor ($http){
        this.$http = $http;
    }

    /**
     * Get users list from API
     * @return {json} users list
     */
    getUsers(){

        return this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
            
                const usersjson = response.data;
                
                console.log('users load');
                console.log(usersjson);

                return usersjson;
            })
            .catch((e) => {
                
                console.log('error getting users:\n' + e);
                return {};
            });
    }

    /**
     * Get username from API
     * @param {int} userId 
     * @return {string} user name
     */
    getUsername(userId){

        return this.$http.get('https://jsonplaceholder.typicode.com/users?id=' + userId)
            .then((response) => {
            
                const username = response.data[0].name;
                return username;
            })
            .catch((e) => {
                
                console.log('error getting username:\n' + e);
                return {};
            });
    }

    /**
     * Get albums list from API
     * @param {int} userId 
     * @return {json} abums list
     */
    getAlbums(userId) {
        return this.$http.get('http://jsonplaceholder.typicode.com/albums?userId=' + userId)
            .then((response) => {
              
                const albumsjson = response.data;
                
                console.log('albums load');
                console.log(albumsjson);

                return albumsjson;
            })
            .catch((e) => {

                console.log('error getting albums:\n' + e);
                return {};
            });
    }

    /**
     * Get album title from API
     * @param {int} albumId 
     * @return {string} album title
     */
    getAlbumTitle(albumId){

        return this.$http.get('https://jsonplaceholder.typicode.com/albums?id=' + albumId)
            .then((response) => {
            
                const albumTitle = response.data[0].title;
                return albumTitle;
            })
            .catch((e) => {
                
                console.log('error getting album title:\n' + e);
                return {};
            });
    }

    /**
     * Get photos in album from API
     * @param {int} albumId 
     * @return {json} album photos
     */
    getPhotos(albumId) {
        return this.$http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
            .then((response) => {
              
                const photosjson = response.data;
                
                console.log('photos load');
                console.log(photosjson);

                return photosjson;
            })
            .catch((e) => {

                console.log('error getting photos:\n' + e);
                return {};
            });
    }
}

AppService.$inject = ['$http']

export default AppService;