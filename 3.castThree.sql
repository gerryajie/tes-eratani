-- Munculkan data country mana aja yang spend nya terbanyak
`select du.country , sum(db.total_buy) as total_buy
from data_user du
join data_belanja db on du.id = db.id
group by du.country 
order by total_buy DESC`;

-- Munculkan data jumlah tipe kartu kredit terbanyak
`select du.credit_card_type as credit_card_type, count(du.credit_card_type) as total_credit_card_type
from data_user du 
group by du.credit_card_type 
order by total_credit_card_type DESC`;