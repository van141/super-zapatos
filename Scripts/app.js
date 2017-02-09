var ViewModel = function () {
    var self = this;

    self.stores = ko.observableArray();
    var storesUri = '/api/stores/';

    self.articles = ko.observableArray();
    var articlesUri = '/api/articles/';

    self.detail = ko.observable();
    self.error = ko.observable();

    function ajaxHelper(uri, method, data) {
        self.error(''); // Clear error message

        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }
    
    // Fetch the initial data.
    getAllStores();
    getAllArticles();

    ///// STORES /////
    self.getStoreDetail = function (item) {
        ajaxHelper(storesUri + item.StoreID, 'GET').done(function (data) {
            self.detail(data);
        });
    }

    function getAllStores() {
        ajaxHelper(storesUri, 'GET').done(function (data) {
            self.stores(data);
        });
    }

    //add new stores
    //self.authors = ko.observableArray();
    self.newStore = {
        StoreID: ko.observable(),
        Name: ko.observable(),
        Address: ko.observable()
    }

    //var authorsUri = '/api/authors/';

    //function getAuthors() {
    //    ajaxHelper(authorsUri, 'GET').done(function (data) {
    //        self.authors(data);
    //    });
    //}

    self.addStore = function (formElement) {
        var store = {
            StoreID: self.newStore.StoreID(),
            Name: self.newStore.Name(),
            Address: self.newStore.Address()
        };

        ajaxHelper(storesUri, 'POST', store).done(function (item) {
            self.stores.push(item);
        });
    }
    ////////////////////

    ///// ARTICLES /////
    self.getArticleDetail = function (item) {
        ajaxHelper(articlesUri + item.ArticleID, 'GET').done(function (data) {
            self.detail(data);
        });
    }

    function getAllArticles() {
        ajaxHelper(articlesUri, 'GET').done(function (data) {
            self.articles(data);
        });
    }

    //add new articles
    //self.authors = ko.observableArray();
    self.newArticle = {
        ArticleID: ko.observable(),
        Name: ko.observable(),
        Description: ko.observable(),
        Price: ko.observable(),
        TotalInShelf: ko.observable(),
        TotalInVault: ko.observable(),
        Store: ko.observable()
    }

    //var authorsUri = '/api/authors/';

    //function getAuthors() {
    //    ajaxHelper(authorsUri, 'GET').done(function (data) {
    //        self.authors(data);
    //    });
    //}

    self.addArticle = function (formElement) {
        var article = {
            ArticleID: self.newArticle.ArticleID(),
            Name: self.newArticle.Name(),
            Description: self.newArticle.Description(),
            Price: self.newArticle.Price(),
            TotalInShelf: self.newArticle.TotalInShelf(),
            TotalInVault: self.newArticle.TotalInVault(),
            StoreID: self.newArticle.Store().StoreID
        };

        ajaxHelper(articlesUri, 'POST', article).done(function (item) {
            self.articles.push(item);
        });
    }

    //getArticles();

};

ko.applyBindings(new ViewModel());
