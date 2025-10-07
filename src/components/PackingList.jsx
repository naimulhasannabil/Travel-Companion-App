import React, { useState } from "react";
import { Plus, Check, X, Package } from "lucide-react";

const PackingList = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Passport', category: 'documents', packed: true, essential: true },
        { id: 2, name: 'Flight tickets', category: 'documents', packed: true, essential: true },
        { id: 3, name: 'Hotel confirmation', category: 'documents', packed: false, essential: true },
        { id: 4, name: 'Travel insurance', category: 'documents', packed: false, essential: true },
        { id: 5, name: 'T-shirts (5x)', category: 'clothing', packed: true, essential: false },
        { id: 6, name: 'Jeans (2x)', category: 'clothing', packed: true, essential: false },
        { id: 7, name: 'Underwear (7x)', category: 'clothing', packed: false, essential: true },
        { id: 8, name: 'Socks (7x)', category: 'clothing', packed: false, essential: true },
        { id: 9, name: 'Phone charger', category: 'electronics', packed: true, essential: true },
        { id: 10, name: 'Camera', category: 'electronics', packed: false, essential: false },
        { id: 11, name: 'Power bank', category: 'electronics', packed: false, essential: false },
        { id: 12, name: 'Toothbrush', category: 'toiletries', packed: true, essential: true },
        { id: 13, name: 'Toothpaste', category: 'toiletries', packed: false, essential: true },
        { id: 14, name: 'Shampoo', category: 'toiletries', packed: false, essential: false },
    ]);

    const [newItem, setNewItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('clothing');
    const [filterCategory, setFilterCategory] = useState('all');

    const categories = {
        documents: { icon: '📄', label: 'Documents', color: 'bg-blue-100 text-blue-700' },
        clothing: { icon: '👕', label: 'Clothing',     color: 'bg-green-100 text-green-700' },
        electronics: { icon: '📱', label: 'Electronics', color: 'bg-purple-100 text-purple-700' },
        toiletries: { icon: '🧴', label: 'Toiletries', color: 'bg-pink-100 text-pink-700' },
        other: { icon: '📦', label: 'Other',     color: 'bg-gray-100 text-gray-700' }
    };

    const togglePacked = (id) => {
        setItems(items.map(item =>
          item.id === id ? { ...item, packed:     !item.packed } : item
        ));
    };

    const addItem = (e) => {
        e.preventDefault();
        if (newItem.trim()) {
          const item = {
            id: Date.now(),
            name: newItem.trim(),
            category: selectedCategory,
            packed: false,
            essential: false
          };
          setItems([...items, item]);
          setNewItem('');
        }
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const filteredItems = filterCategory === 'all' 
      ? items 
      : items.filter(item => item.category === filterCategory);

    const getProgress = () => {
       const packedCount = items.filter(item => item.packed).length;
       return items.length > 0 ? Math.round((packedCount / items.length) * 100) : 0;
    };

    const getCategoryStats = () => {
        return Object.keys(categories).map(category => {
            const categoryItems = items.filter(item => item.category === category);
            const packedItems = categoryItems.filter(item => item.packed);
            return {
               category,
               total: categoryItems.length,
               packed: packedItems.length,
               percentage: categoryItems.length > 0 ? Math.round((packedItems.length / categoryItems.length) * 100) : 0
            };
        });
    };

    const progress = getProgress();
    const categoryStats = getCategoryStats();

    return (
        <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Packing List</h2>
        <p className="text-gray-600">Keep track of everything you need for your trip</p>
      </div>

      {/* Progress Overview */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Packing Progress</h3>
          <span className="text-2xl font-bold text-ocean-600">{progress}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div 
            className="bg-gradient-to-r from-ocean-500 to-forest-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categoryStats.map(stat => (
            <div key={stat.category} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${categories[stat.category].color} mb-2`}>
                <span className="text-lg">{categories[stat.category].icon}</span>
              </div>
              <p className="text-sm font-medium text-gray-900">{categories[stat.category].label}</p>
              <p className="text-xs text-gray-500">{stat.packed}/{stat.total} items</p>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                <div 
                  className="bg-ocean-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Item Form */}
      <div className="card p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Add New Item</h3>
        <form onSubmit={addItem} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter item name..."
            className="input-field flex-1"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field w-full sm:w-40"
          >
            {Object.entries(categories).map(([key, cat]) => (
              <option key={key} value={key}>{cat.label}</option>
            ))}
          </select>
          <button type="submit" className="btn-primary flex items-center justify-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add</span>
          </button>
        </form>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilterCategory('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filterCategory === 'all'
              ? 'bg-ocean-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All Items ({items.length})
        </button>
        {Object.entries(categories).map(([key, cat]) => {
          const count = items.filter(item => item.category === key).length;
          if (count === 0) return null;
          return (
            <button
              key={key}
              onClick={() => setFilterCategory(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                filterCategory === key
                  ? 'bg-ocean-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 card">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-500 mb-2">No items found</h3>
            <p className="text-gray-400">
              {filterCategory === 'all' 
                ? "Start adding items to your packing list!"
                : `No items in ${categories[filterCategory].label} category`
              }
            </p>
          </div>
        ) : (
          filteredItems.map(item => (
            <div
              key={item.id}
              className={`card p-4 flex items-center justify-between transition-all duration-200 ${
                item.packed ? 'bg-green-50 border-green-200' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => togglePacked(item.id)}
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                    item.packed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-ocean-400'
                  }`}
                >
                  {item.packed && <Check className="h-4 w-4" />}
                </button>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${categories[item.category].color}`}>
                    {categories[item.category].icon}
                  </span>
                  <span className={`font-medium ${item.packed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {item.name}
                  </span>
                  {item.essential && (
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-lg font-medium">
                      Essential
                    </span>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => deleteItem(item.id)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
    );
};

export default PackingList;