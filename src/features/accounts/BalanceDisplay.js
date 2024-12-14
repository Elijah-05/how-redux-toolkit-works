function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "ETB",
    
  }).format(value);
}

function BalanceDisplay({balance}) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
