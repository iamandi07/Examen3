using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examen3.ViewModels.Collections
{
    public class PaginatedList<T> : List<T>
    {
        public PaginatedList(long currentpage, long totalItems, long itemsPerPage)
        {
            CurrentPage = currentpage;
            TotalItems = totalItems;
            ItemsPerPage = ItemsPerPage;
            TotalPages = (totalItems + itemsPerPage - 1) / itemsPerPage;
        }
        public long CurrentPage { get; private set; }
        public long TotalItems { get; private set; }
        public long ItemsPerPage { get; private set; }
        public long TotalPages { get; private set; }
    }
}
