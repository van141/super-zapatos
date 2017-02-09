namespace WebApiShoes.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApiShoes.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApiShoes.Models.WebApiShoesContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "WebApiShoes.Models.WebApiShoesContext";
        }

        protected override void Seed(WebApiShoes.Models.WebApiShoesContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Stores.AddOrUpdate(
              p => p.StoreID,
              new Store { Name = "Store1", Address = "Escazu" },
              new Store { Name = "Store2", Address = "Chepe" },
              new Store { Name = "Store3", Address = "Cartago" }
            );

            context.Articles.AddOrUpdate(
              p => p.ArticleID,
              new Article { Name = "Reebok", Description = "Tennis", Price = 20000, TotalInShelf = 10, TotalInVault = 20, StoreID = 1 },
              new Article { Name = "Rino", Description = "Zapato", Price = 25000, TotalInShelf = 15, TotalInVault = 30, StoreID = 2 },
              new Article { Name = "Croc", Description = "Chancla", Price = 5000, TotalInShelf = 5, TotalInVault = 10, StoreID = 2 }
            );
        }
    }
}
