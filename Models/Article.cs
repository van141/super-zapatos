using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace WebApiShoes.Models
{
    [Table("Article")]
    public partial class Article
    {
        [Key]
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        public int ArticleID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int TotalInShelf { get; set; }
        public int TotalInVault { get; set; }
        public int StoreID { get; set; }
        public Store Store { get; set; }
    }
    
}